<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as a single section-linked index route, because the requested experience is a continuous personal-brand presentation.
- Keep all portfolio content as static data in the index route and visuals in the global stylesheet, because this presentation needs no backend or persistence.
- Use a direct React + Vite static SPA entry with no router or server runtime, because the portfolio must deploy unchanged under the GitHub Pages `/keerth/` base path.
