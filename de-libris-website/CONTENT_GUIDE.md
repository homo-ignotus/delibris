# Updating De Libris (no HTML, CSS or JavaScript editing needed)

This is a **Jekyll** website. GitHub Pages can build the writing files (`.md`) into HTML pages automatically. Each writing file is its own page. Everything you will normally update lives in a few folders below.

## Currently reading

Open **`currently-reading.md`**. Change the values of `book:` and `author:` at the top, then replace the paragraphs below the second `---` with your synopsis or pre-reading thoughts.

## A book review

Copy **`_starter-files/new-review.md`** into **`_reviews/`** and give it a unique filename, for example `the-secret-history.md`. Change `title:`, `author:`, `rating:` (a whole number from 0 to 5), and `order:`. Add a `cover:` line if you have a cover image. Write or paste your review beneath the second `---`. Add `## A heading` for new subsections.

The file becomes its own webpage automatically, and the reviews list adds it automatically. For cover images, place a JPEG or PNG in `assets/images/covers/` and use a path like `cover: /assets/images/covers/secret-history.jpg`. The supplied SVG covers are placeholders, not the original publishers' cover art.

## Poetry

Copy **`_starter-files/new-poem.md`** into **`_poems/`**. Change its title and order, then paste your poem below the second `---`. The poem title appears in the Poetry list, and the file gets its own page. Leave **two spaces at the end of a poetic line** to preserve that line break. Leave an empty line between stanzas.

## Travel writing

Copy **`_starter-files/new-trip.md`** into **`_travels/`**. Change title and dates, then paste your text. The date can be `October 2025`, `7/10/2025`, or `7–12 October 2025`: it is ordinary text, not a date field with restrictions. Create section headings with `## Heading`.

Add your images under `assets/images/travel/`. Then edit the `gallery:` lines at the top of that travel file, e.g.:

```yaml
gallery:
  - image: /assets/images/travel/paris.jpg
    caption: An afternoon in Paris
  - image: /assets/images/travel/street.png
    caption: The old bookshop
```

If you don't want a gallery, use `gallery: []` instead. The photographs will appear after the writing and above the sleeping dog.

## Essays

Copy **`_starter-files/new-essay.md`** into **`_essays/`**. Change title and order, and paste the essay beneath the second `---`.

## Optional photograph in the study window

Put exactly ONE image named **`window-view.jpg`**, **`window-view.jpeg`**, **`window-view.png`** or **`window-view.webp`** into `assets/images/`. The site finds it automatically without code changes. If multiple versions exist, JPG takes priority. Remove the old file when switching file types. If none exists, the window stays white. Landscape photographs generally work best.

## A few small rules

- The lines between the two `---` marks at the start of every article are its metadata. The writing goes below them.
- Keep `.md` filenames lowercase with hyphens, e.g. `spring-in-rome.md`.
- Each new `.md` file automatically gets a distinct link: `reviews/spring-in-rome/`, etc.
- `order:` is the number deciding the position in a list (1 before 2). It is not a rating.
- `rating:` is a whole number out of 5. The star display updates automatically.
- You do **not** need to alter the index HTML pages when adding a piece.
- A missing cover displays a decorative placeholder; images can be JPG, PNG or SVG.
- The optional window photo, cover pictures and travel photographs remain your files in the repository.
