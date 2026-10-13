# De Libris

An illustrated, interactive literary study—built with HTML, CSS, a little JavaScript, and Markdown content files. Designed for GitHub Pages (Jekyll), with no database, paid services or frontend framework.

For a quick local look at the illustrated room, open `PREVIEW-homepage.html` directly in your browser. Its collection links are only fully functional after Jekyll builds the site.

**Start with `CONTENT_GUIDE.md`** to learn how to update the books, poetry, travel writing, essays, star ratings and images without touching the templates.

## What is included

- Illustrated homepage with clickable books (four section books, the current book, three individual reviews).
- Original illustrated room preserved, with editable white window photograph slot.
- Gentle animated firelight, tea steam, hover highlights, and page-turn transitions.
- Separate collection and individual pages for reviews, poems, travel writing, essays.
- Currently reading page.
- Continuous botanical margins, parchment-tone design, and a matching cutout of the sleeping dog at the bottom of interior pages.
- Example articles, cover-art placeholders, a sample travel photo gallery and starter files for new writing.
- Accessibility: text navigation under the room, focusable book links, reduced-motion support, sensible headings, and alt text.

## How it works

GitHub Pages has built-in support for Jekyll. It reads files such as `_reviews/the-midnight-library.md`, creates individual HTML pages for them, and automatically adds them to the Book Reviews list. Therefore there are no HTML files to manually duplicate for every new piece. An `index.html` **does not look like the final homepage** if opened as a file on your computer without Jekyll—the GitHub Pages build step applies the layouts.

To work locally with Jekyll installed, run `jekyll serve` from the project folder and open the URL it shows. The site is intended to be built by GitHub Pages when published.

On GitHub Pages **project repositories** (not username.github.io repositories), set `baseurl:` in `_config.yml` to `"/YOUR-REPOSITORY-NAME"` to make all links work. For a user/organisation site at the domain root, leave it as `""`. You'll only need to configure this once.

The pictured bookcase includes three static example review spines. The **list of reviews builds automatically** when you add another review, but new spines are not automatically drawn onto the fixed illustration. The Book Reviews category link will still lead to every review you add.

All sample written pieces are demonstration text, not final personal reviews or travel accounts. The illustrated room is the reference image supplied in this project.
