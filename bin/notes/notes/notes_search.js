/**
 * Calcium Notes - Universal Master Real-Time Search Engine
 * Powering instantaneous search across CA Final Subjects: FR, AFM, Audit, DT, and IDT.
 * Matches Headings, Sections, SAs, Formulas, TYK Questions, and Body Text.
 */

(function () {
    let currentCategory = 'all';
    let selectedIndex = -1;
    let searchTimeout = null;

    document.addEventListener('DOMContentLoaded', initUniversalSearch);

    function initUniversalSearch() {
        const searchInput = document.getElementById('frSearchInput') ||
                            document.getElementById('afmSearchInput') ||
                            document.getElementById('audSearchInput') ||
                            document.getElementById('dtSearchInput') ||
                            document.getElementById('idtSearchInput') ||
                            document.getElementById('notesSearchInput') ||
                            document.querySelector('.search-input-field');

        const clearBtn = document.getElementById('clearSearchBtn') ||
                         document.querySelector('.search-clear-btn');

        const dropdown = document.getElementById('searchResultsDropdown') ||
                         document.querySelector('.search-dropdown-overlay');

        const resultsList = document.getElementById('searchResultsList') ||
                            document.querySelector('.search-results-list');

        const resultsCount = document.getElementById('searchResultsCount');
        const filterPills = document.querySelectorAll('.search-filter-pill');
        const resetTableBtn = document.getElementById('resetTableFilterBtn');

        if (!searchInput || !dropdown) return;

        // Auto-detect loaded subject search index
        const index = window.FR_SEARCH_INDEX ||
                      window.AFM_SEARCH_INDEX ||
                      window.AUDIT_SEARCH_INDEX ||
                      window.DT_SEARCH_INDEX ||
                      window.IDT_SEARCH_INDEX ||
                      window.CURRENT_SEARCH_INDEX || [];

        console.log(`[Calcium Search] Initialized with ${index.length} items.`);

        // Debounced input search
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(searchInput.value);
            }, 80);
        });

        // Focus input displays dropdown if has query
        searchInput.addEventListener('focus', function () {
            if (searchInput.value.trim().length > 0) {
                dropdown.style.display = 'block';
            }
        });

        // Clear button
        if (clearBtn) {
            clearBtn.addEventListener('click', function () {
                searchInput.value = '';
                performSearch('');
                searchInput.focus();
            });
        }

        // Reset filter
        if (resetTableBtn) {
            resetTableBtn.addEventListener('click', function () {
                searchInput.value = '';
                performSearch('');
                searchInput.focus();
            });
        }

        // Filter pills click
        filterPills.forEach(pill => {
            pill.addEventListener('click', function () {
                filterPills.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                currentCategory = this.getAttribute('data-category') || this.getAttribute('data-filter') || 'all';
                performSearch(searchInput.value);
            });
        });

        // Close on click outside
        document.addEventListener('click', function (e) {
            const container = searchInput.closest('.subject-search-container') ||
                              searchInput.closest('.fr-search-container') ||
                              searchInput.closest('.idt-search-container') ||
                              searchInput.parentElement;
            if (container && !container.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        // Keyboard hotkeys
        document.addEventListener('keydown', function (e) {
            // '/' or 'Ctrl+K'
            if ((e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
                return;
            }

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
                        if (link) window.location.href = link.getAttribute('href');
                    } else if (items.length > 0) {
                        e.preventDefault();
                        const firstLink = items[0].querySelector('a');
                        if (firstLink) window.location.href = firstLink.getAttribute('href');
                    }
                } else if (e.key === 'Escape') {
                    dropdown.style.display = 'none';
                    selectedIndex = -1;
                }
            }
        });

        function updateItemHighlight(items) {
            items.forEach((item, idx) => {
                if (idx === selectedIndex) {
                    item.classList.add('selected');
                    item.scrollIntoView({ block: 'nearest' });
                } else {
                    item.classList.remove('selected');
                }
            });
        }

        // Perform Search
        function performSearch(rawQuery) {
            const query = (rawQuery || '').trim();
            selectedIndex = -1;

            if (clearBtn) {
                clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
            }

            if (!query) {
                dropdown.style.display = 'none';
                restoreAllTableRows();
                return;
            }

            dropdown.style.display = 'block';

            const cleanQuery = query.toLowerCase().replace(/[\(\)\[\]\,\.\-\/\:\;]/g, ' ');
            const queryWords = cleanQuery.split(/\s+/).filter(w => w.length > 0);

            const results = [];
            const matchingChapterUrls = new Set();

            index.forEach(item => {
                // Category filtering
                if (currentCategory !== 'all') {
                    if (currentCategory === 'section' && item.type !== 'section' && item.type !== 'sa') return;
                    if (currentCategory === 'sa' && item.type !== 'sa' && item.type !== 'section') return;
                    if (currentCategory === 'topic' && item.type !== 'topic') return;
                    if (currentCategory === 'question' && item.type !== 'question') return;
                    if (currentCategory === 'chapter' && item.type !== 'chapter') return;
                    if (currentCategory === 'formula' && item.type !== 'formula') return;
                }

                const itemTitle = (item.title || '').toLowerCase();
                const itemKeywords = (item.keywords || '').toLowerCase();
                const itemSummary = (item.summary || '').toLowerCase();
                const itemSub = (item.subtitle || '').toLowerCase();

                let score = 0;
                let allMatched = true;

                // Exact phrase
                if (itemTitle.includes(cleanQuery)) {
                    score += 160;
                } else if (itemKeywords.includes(cleanQuery)) {
                    score += 90;
                }

                // Token match
                for (const word of queryWords) {
                    if (itemTitle.includes(word)) {
                        score += 35;
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

                if (allMatched || score >= 35) {
                    results.push({ item, score });
                    const baseUrl = (item.url || '').split('#')[0];
                    if (baseUrl) matchingChapterUrls.add(baseUrl);
                }
            });

            // Sort by score
            results.sort((a, b) => b.score - a.score);

            // Render live dropdown
            renderDropdownResults(results, query);

            // Filter table rows in background
            filterTableRows(query, matchingChapterUrls);
        }

        function renderDropdownResults(results, rawQuery) {
            resultsList.innerHTML = '';

            if (results.length === 0) {
                if (resultsCount) resultsCount.innerHTML = `No results found for "<strong>${escapeHtml(rawQuery)}</strong>"`;
                resultsList.innerHTML = `
                    <div class="search-empty-state">
                        <div class="search-empty-icon">🔍</div>
                        <h4>No direct matches found</h4>
                        <p>We couldn't find any section, formula, question, or topic matching "<strong>${escapeHtml(rawQuery)}</strong>".</p>
                    </div>
                `;
                return;
            }

            const displayLimit = Math.min(25, results.length);
            if (resultsCount) {
                resultsCount.innerHTML = `Found <strong>${results.length}</strong> matching sections, questions & topics (Showing top ${displayLimit}):`;
            }

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
                    badgeLabel = 'SECTION / IND AS';
                } else if (entry.type === 'sa') {
                    badgeClass = 'badge-sa';
                    badgeLabel = 'STANDARD (SA)';
                } else if (entry.type === 'question') {
                    badgeClass = 'badge-q';
                    badgeLabel = 'ICAI TYK';
                } else if (entry.type === 'chapter') {
                    badgeClass = 'badge-ch';
                    badgeLabel = 'CHAPTER';
                } else if (entry.type === 'formula') {
                    badgeClass = 'badge-formula';
                    badgeLabel = 'FORMULA / MODEL';
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
                            <span>Go to Content &rarr;</span>
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
            const tableRows = document.querySelectorAll('.table-grid .table-row, .table-row');
            const cleanQuery = query.toLowerCase();

            tableRows.forEach(row => {
                const link = row.querySelector('a.btn-view-active') || row.querySelector('a');
                const rowText = row.innerText.toLowerCase();
                const keywords = (row.getAttribute('data-keywords') || '').toLowerCase();
                const href = link ? link.getAttribute('href') : '';

                const isDirectMatch = rowText.includes(cleanQuery) || keywords.includes(cleanQuery);
                const isChildSectionMatch = matchingChapterUrls.has(href);

                if (isDirectMatch || isChildSectionMatch) {
                    row.style.display = 'grid';
                    row.style.opacity = '1';
                } else {
                    row.style.display = 'none';
                }
            });
        }

        function restoreAllTableRows() {
            const tableRows = document.querySelectorAll('.table-grid .table-row, .table-row');
            tableRows.forEach(row => {
                row.style.display = 'grid';
                row.style.opacity = '1';
            });
        }

        function highlightMatches(text, words) {
            if (!text) return '';
            let escaped = escapeHtml(text);
            words.forEach(word => {
                if (word.length >= 2) {
                    const regex = new RegExp(`(${escapeRegExp(word)})`, 'gi');
                    escaped = escaped.replace(regex, '<span class="search-highlight">$1</span>');
                }
            });
            return escaped;
        }

        function escapeHtml(str) {
            if (!str) return '';
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
    }

    window.quickFillSearch = function (text) {
        const searchInput = document.querySelector('.search-input-field');
        if (searchInput) {
            searchInput.value = text;
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            searchInput.focus();
        }
    };
})();
