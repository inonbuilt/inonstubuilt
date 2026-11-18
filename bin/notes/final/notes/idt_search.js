/**
 * Calcium Notes - Master Real-Time Search Engine for CA Final IDT (Paper 5)
 * Enables lightning-fast instant search across Sections, Topics, Rules, Circulars, ICAI TYK Questions, and Chapters.
 */

(function () {
    let currentCategory = 'all';
    let selectedIndex = -1;
    let searchTimeout = null;

    // Wait for DOM ready
    document.addEventListener('DOMContentLoaded', initIDTSearch);

    function initIDTSearch() {
        const searchInput = document.getElementById('idtSearchInput');
        const clearBtn = document.getElementById('clearSearchBtn');
        const dropdown = document.getElementById('searchResultsDropdown');
        const resultsList = document.getElementById('searchResultsList');
        const resultsCount = document.getElementById('searchResultsCount');
        const filterPills = document.querySelectorAll('.search-filter-pill');
        const resetTableBtn = document.getElementById('resetTableFilterBtn');

        if (!searchInput || !dropdown) return;

        // Ensure search index is available
        const index = window.IDT_SEARCH_INDEX || [];
        console.log(`[IDT Search] Initialized with ${index.length} indexed items.`);

        // Event: Search Input (debounced)
        searchInput.addEventListener('input', function (e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(searchInput.value);
            }, 80);
        });

        // Event: Focus Input
        searchInput.addEventListener('focus', function () {
            if (searchInput.value.trim().length > 0) {
                dropdown.style.display = 'block';
            }
        });

        // Event: Clear Button
        if (clearBtn) {
            clearBtn.addEventListener('click', function () {
                searchInput.value = '';
                performSearch('');
                searchInput.focus();
            });
        }

        // Event: Reset Table Filter Button
        if (resetTableBtn) {
            resetTableBtn.addEventListener('click', function () {
                searchInput.value = '';
                performSearch('');
                searchInput.focus();
            });
        }

        // Event: Category Filter Pills
        filterPills.forEach(pill => {
            pill.addEventListener('click', function () {
                filterPills.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                currentCategory = this.getAttribute('data-category') || 'all';
                performSearch(searchInput.value);
            });
        });

        // Event: Click Outside to Close Dropdown
        document.addEventListener('click', function (e) {
            const searchContainer = document.querySelector('.idt-search-container');
            if (searchContainer && !searchContainer.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        // Event: Keyboard Shortcuts & Navigation
        document.addEventListener('keydown', function (e) {
            // Hotkey: '/' or 'Ctrl + K' / 'Cmd + K' to focus search
            if ((e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
                return;
            }

            // If search dropdown is open, handle arrows and enter
            if (dropdown.style.display === 'block') {
                const items = dropdown.querySelectorAll('.search-result-item');
                if (!items || items.length === 0) return;

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedIndex = (selectedIndex + 1) % items.length;
                    updateItemHighlight(items);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                    updateItemHighlight(items);
                } else if (e.key === 'Enter') {
                    if (selectedIndex >= 0 && selectedIndex < items.length) {
                        e.preventDefault();
                        const link = items[selectedIndex].querySelector('a');
                        if (link) {
                            window.location.href = link.getAttribute('href');
                        }
                    } else if (items.length > 0) {
                        // Open first result if none selected
                        e.preventDefault();
                        const firstLink = items[0].querySelector('a');
                        if (firstLink) {
                            window.location.href = firstLink.getAttribute('href');
                        }
                    }
                } else if (e.key === 'Escape') {
                    dropdown.style.display = 'none';
                    selectedIndex = -1;
                }
            }
        });

        // Core Search Execution
        function performSearch(rawQuery) {
            const query = (rawQuery || '').trim();
            selectedIndex = -1;

            if (clearBtn) {
                clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
            }

            if (!query) {
                dropdown.style.display = 'none';
                restoreAllChapterRows();
                return;
            }

            dropdown.style.display = 'block';

            // Tokenize query words
            const cleanQuery = query.toLowerCase().replace(/[\(\)\[\]\,\.\-\/\:\;]/g, ' ');
            const queryWords = cleanQuery.split(/\s+/).filter(w => w.length > 0);

            // Filter & Rank items
            const results = [];
            const matchingChapterUrls = new Set();

            index.forEach(item => {
                // Category match check
                if (currentCategory !== 'all') {
                    if (currentCategory === 'section' && item.type !== 'section') return;
                    if (currentCategory === 'topic' && item.type !== 'topic') return;
                    if (currentCategory === 'question' && item.type !== 'question') return;
                    if (currentCategory === 'chapter' && item.type !== 'chapter') return;
                }

                const itemTitle = (item.title || '').toLowerCase();
                const itemKeywords = (item.keywords || '').toLowerCase();
                const itemSummary = (item.summary || '').toLowerCase();
                const itemSub = (item.subtitle || '').toLowerCase();

                let score = 0;
                let allMatched = true;

                // Check exact phrase matches
                if (itemTitle.includes(cleanQuery)) {
                    score += 150;
                } else if (itemKeywords.includes(cleanQuery)) {
                    score += 80;
                }

                // Check individual token matches
                for (const word of queryWords) {
                    if (itemTitle.includes(word)) {
                        score += 30;
                    } else if (itemKeywords.includes(word)) {
                        score += 15;
                    } else if (itemSummary.includes(word)) {
                        score += 8;
                    } else if (itemSub.includes(word)) {
                        score += 5;
                    } else {
                        allMatched = false;
                    }
                }

                if (allMatched || score >= 40) {
                    results.push({ item, score });
                    // Keep track of which chapter this item points to
                    const baseUrl = (item.url || '').split('#')[0];
                    if (baseUrl) {
                        matchingChapterUrls.add(baseUrl);
                    }
                }
            });

            // Sort by score descending
            results.sort((a, b) => b.score - a.score);

            // Render Results in Dropdown
            renderDropdownResults(results, query);

            // Filter Table Rows in Background
            filterTableRows(query, matchingChapterUrls);
        }

        function renderDropdownResults(results, rawQuery) {
            resultsList.innerHTML = '';

            if (results.length === 0) {
                resultsCount.innerHTML = `No results found for "<strong>${escapeHtml(rawQuery)}</strong>"`;
                resultsList.innerHTML = `
                    <div class="search-empty-state">
                        <div class="search-empty-icon">🔍</div>
                        <h4>No direct matches found</h4>
                        <p>We couldn't find any section, question, or topic matching "<strong>${escapeHtml(rawQuery)}</strong>".</p>
                        <div class="search-suggestions">
                            <span>Suggestions:</span>
                            <a href="javascript:void(0)" onclick="quickFillSearch('Section 17(5)')">Section 17(5)</a>
                            <a href="javascript:void(0)" onclick="quickFillSearch('Section 61')">Section 61 Warehousing</a>
                            <a href="javascript:void(0)" onclick="quickFillSearch('MOOWR')">MOOWR Scheme</a>
                            <a href="javascript:void(0)" onclick="quickFillSearch('EPCG')">EPCG Scheme</a>
                            <a href="javascript:void(0)" onclick="quickFillSearch('Unjust Enrichment')">Unjust Enrichment</a>
                            <a href="javascript:void(0)" onclick="quickFillSearch('Del Credere')">Del Credere Agent</a>
                        </div>
                    </div>
                `;
                return;
            }

            const displayLimit = Math.min(25, results.length);
            resultsCount.innerHTML = `Found <strong>${results.length}</strong> matching sections, questions & topics (Showing top ${displayLimit}):`;

            const queryWords = rawQuery.toLowerCase().split(/\s+/).filter(w => w.length > 0);

            for (let i = 0; i < displayLimit; i++) {
                const entry = results[i].item;
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.setAttribute('data-index', i);

                let badgeClass = 'badge-topic';
                let badgeLabel = 'TOPIC';
                if (entry.type === 'section') {
                    badgeClass = 'badge-sec';
                    badgeLabel = 'SECTION';
                } else if (entry.type === 'question') {
                    badgeClass = 'badge-q';
                    badgeLabel = 'QUESTION';
                } else if (entry.type === 'chapter') {
                    badgeClass = 'badge-ch';
                    badgeLabel = 'CHAPTER';
                }

                const highlightedTitle = highlightMatches(entry.title, queryWords);
                const highlightedSub = highlightMatches(entry.subtitle || '', queryWords);
                const highlightedSummary = highlightMatches(entry.summary || '', queryWords);

                div.innerHTML = `
                    <a href="${escapeHtml(entry.url)}" class="result-card-link">
                        <div class="result-top-line">
                            <span class="result-badge ${badgeClass}">${badgeLabel}</span>
                            <span class="result-subtitle">${highlightedSub}</span>
                        </div>
                        <div class="result-title">${highlightedTitle}</div>
                        <div class="result-summary">${highlightedSummary}</div>
                        <div class="result-action">
                            <span>Go to Section / Question</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </div>
                    </a>
                `;

                resultsList.appendChild(div);
            }
        }

        function filterTableRows(query, matchingChapterUrls) {
            const tableRows = document.querySelectorAll('.table-grid .table-row');
            const moduleHeaders = document.querySelectorAll('.module-group-title');
            const noMatchNotice = document.getElementById('noTableMatchesNotice');
            const cleanQuery = query.toLowerCase();

            let visibleCount = 0;

            tableRows.forEach(row => {
                const link = row.querySelector('a.btn-view-active');
                const rowText = row.innerText.toLowerCase();
                const href = link ? link.getAttribute('href') : '';

                // A chapter matches if its row contains query text OR if any search result belongs to this chapter file
                const isDirectMatch = rowText.includes(cleanQuery);
                const isChildSectionMatch = matchingChapterUrls.has(href);

                if (isDirectMatch || isChildSectionMatch) {
                    row.style.display = 'grid';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            // Adjust module title headers visibility based on remaining rows
            moduleHeaders.forEach(header => {
                let hasVisibleSibling = false;
                let nextElem = header.nextElementSibling;
                while (nextElem && !nextElem.classList.contains('module-group-title')) {
                    if (nextElem.classList.contains('table-row') && nextElem.style.display !== 'none') {
                        hasVisibleSibling = true;
                        break;
                    }
                    nextElem = nextElem.nextElementSibling;
                }
                header.style.display = hasVisibleSibling ? 'flex' : 'none';
            });

            if (noMatchNotice) {
                noMatchNotice.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        }

        function restoreAllChapterRows() {
            const tableRows = document.querySelectorAll('.table-grid .table-row');
            const moduleHeaders = document.querySelectorAll('.module-group-title');
            const noMatchNotice = document.getElementById('noTableMatchesNotice');

            tableRows.forEach(row => row.style.display = 'grid');
            moduleHeaders.forEach(h => h.style.display = 'flex');

            if (noMatchNotice) {
                noMatchNotice.style.display = 'none';
            }
        }

        function updateItemHighlight(items) {
            items.forEach((item, idx) => {
                if (idx === selectedIndex) {
                    item.classList.add('selected');
                    item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                } else {
                    item.classList.remove('selected');
                }
            });
        }

        function highlightMatches(text, words) {
            if (!text || !words || words.length === 0) return escapeHtml(text);
            let safeText = escapeHtml(text);
            words.forEach(word => {
                if (word.length >= 2) {
                    const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
                    safeText = safeText.replace(regex, '<mark class="search-highlight">$1</mark>');
                }
            });
            return safeText;
        }

        function escapeHtml(str) {
            if (!str) return '';
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        }

        function escapeRegex(str) {
            return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }
    }

    // Global helper for suggestion clicks
    window.quickFillSearch = function (text) {
        const input = document.getElementById('idtSearchInput');
        if (input) {
            input.value = text;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.focus();
        }
    };
})();
