import SCORES from '../scores';

const gloriousEvolution = {
  name: 'gloriousEvolution',
  title: 'Glorious Evolution',
  description:
    'Win a 30+ minute game, where you dealt most damage and did not die in the last 5 minutes of the game.',
  svgPath:
    'M231.732 22.063L256 62.508l24.268-40.446L256 34.313zm-10.783 17.01a108.982 108.982 0 0 0-7.02 7.67c-10.614 12.81-18.59 44.316-21.583 56.257h23.61c1.65-8.502 5.383-33.391 10.327-41.63a76.828 76.828 0 0 1 4.235-6.349zm70.102 0l-9.569 15.948a76.828 76.828 0 0 1 4.235 6.348c4.944 8.24 8.676 33.129 10.328 41.631h23.61c-2.993-11.94-10.97-43.447-21.585-56.258a108.982 108.982 0 0 0-7.02-7.67zM153.412 74.755l-40.096 9.254-21.486 29.752 6.522 23.474L151 124.7V103h9.475zm205.176 0L351.525 103H361v21.7l52.648 12.536 6.522-23.474-21.486-29.752zM240 80a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm32 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-103 41v20.875L181.563 167h42.019c5.75-7.427 13.98-12.846 23.418-14.984v-20.287L236.271 121zm106.729 0L265 131.729v20.287c9.437 2.138 17.667 7.557 23.418 14.984h42.02L343 141.875V121zM151 144.664l-21.066 3.555-6.647 33.234a43.003 43.003 0 0 1 20.467 9.465l16.168-26.95zm210 0l-8.922 19.305 16.168 26.949a43.003 43.003 0 0 1 20.467-9.465l-6.647-33.234zM256 169c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm-55 16v14h14.615a40.734 40.734 0 0 1-.615-7c0-2.386.218-4.722.615-7zm95.385 0c.397 2.278.615 4.614.615 7s-.218 4.722-.615 7H311v-14zm-180.457 13.88c-13.245.104-27.387 10.127-33.78 27.216-2.873 7.68-3.621 15.307-2.681 22.177 3.907-1.326 7.72-1.573 11.105-1.45 8.12.294 14.768 2.896 14.768 2.896s6.724 2.4 13.043 7.508c3.008 2.43 6.121 5.59 8.267 9.955 5.665-4.63 10.506-11.182 13.567-19.364 7.868-21.032-.145-41.693-15.37-47.388-2.854-1.068-5.863-1.573-8.92-1.55zm280.144 0c-3.056-.023-6.065.48-8.92 1.548-15.224 5.695-23.237 26.358-15.369 47.39 3.061 8.182 7.902 14.735 13.567 19.364 2.146-4.366 5.26-7.524 8.267-9.955 6.319-5.107 13.043-7.508 13.043-7.508s6.649-2.602 14.768-2.897c3.386-.122 7.199.125 11.107 1.451.94-6.87.192-14.499-2.681-22.18-6.394-17.088-20.537-27.11-33.782-27.212zM201 217v1.438l21.223 10.61 6.511-6.51a41.582 41.582 0 0 1-5.152-5.538zm87.418 0a41.582 41.582 0 0 1-5.152 5.537l6.511 6.512L311 218.437V217zm-44.69 16l-17.95 17.951-28.52-14.26-9.873 29.91L233 281.898v18.374L243.729 311h24.542L279 300.271v-18.374l45.584-15.295-9.416-30.122-28.945 14.471L268.27 233zM61.34 247.445c-1.4.108-2.595.366-3.336.703-1.076.49-1.442.674-2.055 2.313-6.14 16.414-3.47 34.046-.72 44.732a100.42 100.42 0 0 0 5.421-4.025c-.06-8.656 1.072-18.097 4.329-27.606-1.955-5.047-3.188-10.484-3.64-16.117zm389.32 0c-.45 5.633-1.684 11.07-3.639 16.118 3.257 9.508 4.39 18.95 4.329 27.605a100.54 100.54 0 0 0 5.421 4.025c2.75-10.686 5.42-28.318-.72-44.732-.613-1.64-.98-1.823-2.055-2.313-.74-.337-1.936-.595-3.336-.703zM89.92 264.811c-2.26-.082-4.258.265-5.334.755-1.076.49-1.442.674-2.055 2.313-6.14 16.414-3.47 34.045-.72 44.732 9.088-6.258 22.677-17.806 28.818-34.22.613-1.64.459-2.018-.031-3.094s-1.772-2.648-3.532-4.07c-3.518-2.845-8.033-4.649-8.033-4.649s-4.591-1.604-9.113-1.767zm332.16 0c-4.522.163-9.113 1.767-9.113 1.767s-4.514 1.804-8.033 4.649c-1.76 1.422-3.042 2.994-3.532 4.07-.49 1.076-.644 1.455-.03 3.094 6.14 16.414 19.73 27.962 28.818 34.22 2.749-10.687 5.42-28.318-.721-44.732-.613-1.64-.98-1.823-2.055-2.313-1.076-.49-3.073-.837-5.334-.755zm-280.867 13.431c-4.628 4.392-9.834 7.931-15.37 10.455-3.713 8.427-8.69 15.616-13.993 21.627a100.44 100.44 0 0 0 1.449 6.594c9.088-6.259 22.678-17.807 28.818-34.22.613-1.64.457-2.019-.033-3.094-.18-.394-.495-.867-.871-1.362zm229.576 0c-.376.496-.694.968-.873 1.362-.49 1.075-.646 1.454-.033 3.093 6.14 16.414 19.73 27.962 28.818 34.221a100.44 100.44 0 0 0 1.45-6.594c-5.305-6.012-10.283-13.2-13.997-21.629-5.534-2.524-10.738-6.062-15.365-10.453zm-51.785 7.014L297 299.129v8.6l-8.715 8.714 12.848 25.696 10.06-10.06c1.057-10.982 6.498-20.736 14.54-27.481zm-126.52 0l-6.216 19.342c8.04 6.745 13.482 16.5 14.539 27.48l10.06 10.06 12.848-25.695L215 307.73v-8.6c-7.25-4.82 0 .273-22.516-13.873zM160 313c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm192 0c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm-155.041 40.688c-3.93 8.143-10.484 14.806-18.537 18.894l6.308 25.234-17.46 4.368-6.303-25.207c-.323.008-.643.023-.967.023-8.03 0-15.536-2.354-21.88-6.39l-1.12 1.119v25.324L156.03 433l46.407-10L215 397.875v-26.146zm118.082 0L297 371.728v26.147L309.563 423l46.408 10L375 397.053v-25.324l-1.12-1.12C367.537 374.646 360.03 377 352 377c-.324 0-.644-.016-.967-.023l-6.303 25.207-17.46-4.368 6.308-25.234c-8.053-4.088-14.607-10.75-18.537-18.894zM176 441c-12.82 0-26.656 6.6-37.19 16.936 4.2 1.769 8.076 4.255 11.518 7.21C157.383 459.082 166.28 455 176 455c11 0 20.95 5.223 28.363 12.637 5.328 5.327 9.512 11.968 11.451 19.363h14.31c-4.391-23.86-25.658-46-54.124-46zm160 0c-28.466 0-49.733 22.14-54.123 46h14.309c1.94-7.395 6.123-14.036 11.45-19.363C315.052 460.223 325 455 336 455c9.72 0 18.617 4.082 25.672 10.146 3.442-2.955 7.318-5.441 11.517-7.21C362.656 447.6 348.821 441 336 441zm-211.336 32c-5 0-11.05 2.777-15.637 7.363-1.997 1.998-3.571 4.292-4.802 6.637h31.96a39.015 39.015 0 0 1 2.95-7.729c-4.414-3.928-9.883-6.271-14.47-6.271zM176 473c-5 0-11.05 2.777-15.637 7.363-1.997 1.998-3.571 4.292-4.802 6.637h40.878c-1.23-2.345-2.805-4.64-4.802-6.637C187.05 475.777 181 473 176 473zm160 0c-5 0-11.05 2.777-15.637 7.363-1.997 1.998-3.571 4.292-4.802 6.637h40.878c-1.23-2.345-2.805-4.64-4.802-6.637C347.05 475.777 341 473 336 473zm51.336 0c-5 0-9.051.777-13.637 5.363-1.997 1.998.629 3.56 1.197 8.637h32.88c-1.232-2.345-2.806-4.64-4.803-6.637-4.586-4.586-10.637-7.363-15.637-7.363z',
  score: SCORES.VERY_HARD,
  obtainedCheck: ({ match }) => match.participant.stats.isGloriousEvolutionGame,
  context: 'matches',
  attribute: 'power'
};

export default gloriousEvolution;
