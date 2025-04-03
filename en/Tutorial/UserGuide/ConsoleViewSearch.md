# Console Search @consoleview-search
>HBuilderX 4.61-alpha introduces a new console search feature that allows log content searching in the bottom panel's Console. Currently supports text pattern matching only.

This feature enables real-time search capability for console output logs during program execution, supporting dynamic match updates, multi-shortcut operations, and independent search state management to help users quickly locate critical information.

Function entry: Press `Ctrl+F` (Windows)/`Command+F` (Mac) when the Console is focused, or right-click in the Console and select "Search" to activate the search toolbar.

## Dynamic Real-Time Search @consoleview-search-dynamic
​Live Updates: Automatically refresh search results by pressing Enter/Shift+Enter during continuous log output, synchronizing with the latest content.

​Mouse-Free Interaction: Full keyboard workflow - `Ctrl+F/Command+F` activates the search toolbar. Input text and use `Enter` (next match)/`Shift+Enter` (previous match) for navigation. Press `Esc` to exit. Supports text selection + shortcut activation for instant searching.

<img src="/static/snapshots/tutorial/find/consoleview-search.gif" style="border-radius: 15px; border: 1px solid #eee; zoom: 40%;" />

## Independent Session Management @consoleview-search-indepent-session
Multi-Console Support: Each console instance independently stores search states (including: keywords, result list, current selection index).

Context-Aware Switching: Automatically loads corresponding search states and re-renders highlights when switching between different console tabs.

<img src="/static/snapshots/tutorial/find/consoleview-search2.gif" style="border-radius: 15px; border: 1px solid #eee; zoom: 40%;" />
