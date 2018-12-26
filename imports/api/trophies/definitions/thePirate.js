import SCORES from '../scores';

const thePirate = {
  name: 'thePirate',
  title: 'The Pirate',
  description:
    'Secure Baron Nashor eventhough three of your teammates died in the last 40 seconds.',
  svgPath:
    'M204.813 26.47c-47.833 30.147-65.559 69.524-84.504 114.994-19.315 46.354-39.628 98.61-93.305 146.756 6.085 10.885 19.806 21.43 39.465 30.394 10.776-9.337 21.588-19.802 31.865-30.299l-32.568 6.514-3.532-17.652c22.594-5.308 46.576-9.316 67.391-13.479 1.5-12.248 3.734-22.238 7.338-33.045 39.53-9.031 83.046-24.929 119.037-25.304 49.418 4.492 82.3 14.81 119.47 25.427 2.837 11.075 5.085 23.007 6.268 32.795 21.488 2.892 44.897 8.98 68.028 13.606l-3.532 17.652-32.568-6.514c10.277 10.497 21.089 20.962 31.865 30.3 19.659-8.965 33.38-19.51 39.465-30.395-53.677-48.145-73.99-100.402-93.305-146.756-18.945-45.47-36.67-84.847-84.503-114.994C296.238 44.055 277.03 70.62 256 71.003c-24.332-2.907-39.507-25.418-51.188-44.533zM171 74.003h18v16.84l29.234 15.945c8.62-13.111 22.037-21.785 37.766-21.785s29.146 8.674 37.766 21.785L323 90.843v-16.84h18v15h15v18h-25.04l-29.657 16.178c2.726 10.398 3.39 20.056 1.783 29.89l51.209 27.932H376v18h-15v15h-18v-18.658l-45.451-24.791c-8.134 16.76-23.286 28.449-41.549 28.449-18.263 0-33.415-11.689-41.549-28.45L169 195.346v18.658h-18v-15h-15v-18h21.705l51.21-27.932c-1.62-10.023-.816-20.876 1.782-29.89l-29.658-16.178H156v-18h15zm85 29c-15.553 0-30 16.442-30 39s14.447 39 30 39 30-16.442 30-39-14.447-39-30-39zm-25 23h18v16h-18zm32 0h18v16h-18zm-23 23h32v18h-32zm-88.672 96.275c-1.23 4.528-2.197 9.576-2.945 15.01 77.777-16.486 135.335-16.85 214.637-.086-.721-5.099-1.596-10.115-2.674-15.015-81.523-28.826-127.387-28.658-209.018.091zm-4.562 33.422c-.424 9.46-.335 19.679.177 30.32 4.753.039 9.345.031 13.827-.01 6.59-12.958 53.8-23.891 75.593-6.394 31.024-6.023 53.738-16.34 76.233-31.225-56.816-10.167-121.565.987-165.83 7.31zm96.879 40.393c-2.76 28.11-22.07 46.91-51.645 46.91-17.41 0-28.047-15.338-31.088-39.02-4.157.046-8.378.07-12.738.043 3.258 31.757 9.031 65.783 15.209 93.81 12.83-1.074 30.377-7.884 46.246-16.7 15.178-8.432 29.164-18.651 37.057-25.719-7.13-.615-14.143-1.883-21.012-3.72l4.652-17.387c16.713 4.472 33.443 5.046 51.233.03l4.882 17.325a110.67 110.67 0 0 1-21.082 3.791c7.901 7.066 21.864 17.264 37.012 25.68 15.924 8.846 33.54 15.676 46.38 16.715 10.49-45.632 19.036-96.549 16.136-142.2l-21.912-3.13c-18.234 9.981-60.434 35.275-99.33 43.572zm139.638-36.854c.445 8.808.533 17.712.256 26.678 7.592 9.002 16.344 17.933 26.244 26.812-3.032-1.696-6.46-2.726-10.172-2.726-17.814 2.059-25.24 18.28-25.388 33 .571 15.995 9.892 32.652 25.388 33 1.72 0 3.375-.23 4.963-.635 5.28 21.08 13.551 36.341 30.328 49.365-21.42 15.611-63.538 17.105-86.025 14.53a390.133 390.133 0 0 1-16.275 15.382c46.768 5.84 110.236 6.113 127.08-34.878-19.729-11.428-33.27-30.424-37.319-46.85 27.314 6.033 50.22-9.868 50.637-34.73-34.067-11.184-73-63.891-89.717-78.948zm-254.85.057C98.9 314.222 68.38 341.6 33.874 364.604c20.184 21.992 53.465 24.298 75.195 18.358-26.457 40.808-46.046 58.21-81.37 81.76 49.243 14.027 108.243 23.808 151.991 13.185a386.57 386.57 0 0 1-15.96-15.049c-31.675 3.96-65.776 1.813-95.264-4.603 37.443-29.197 53.024-59.135 67.088-87.24a730.285 730.285 0 0 1-2.54-17.582l-9.038 4.52c-23.393 11.696-45.525 13.212-59.72 7.708 26.777-18.845 48.316-37.823 64.526-57.127-.457-9.033-.575-17.797-.347-26.238zm207.204 19.707l12.726 12.728c-6.403 6.404-14.195 10.616-22.363 13.39v16.882h-32v-11.746c-6.205.212-11.752.11-16 .11v-18c16 0 45.88-1.607 57.637-13.364zm81.883 40.447c10.919 9.226 23.07 18.404 36.472 27.553-6.27 11.21-21.687 10.315-30.56 7.648 3.037-11.635.5-26.466-5.912-35.2zm-17.909 8.553c5.604 1.912 7.333 9.947 7.389 15-.435 4.06-1.547 14.87-7.389 15-5.603-1.912-7.333-9.948-7.388-15 .435-4.06 1.547-14.87 7.388-15zM256 399.114c-6.269 8.582-14.137 16.636-22.88 23.873 8.955-3.216 15.62-5.04 22.903-5.021 7.311.02 13.967 1.881 22.948 5.097-8.78-7.256-16.68-15.337-22.971-23.949zm33.77 32.158l-4.922 13.16c-12.197-4.56-19.227-7.07-24.424-8.017l32.744 49.115c14.797-9.823 27.718-20.992 40.074-33.097-16.68-5.461-30.996-12.44-43.472-21.16zm-67.56.014c-13.64 8.811-29.479 17.396-43.45 21.147 13.108 12.633 25.708 23.663 40.072 33.097l32.768-49.152c-5.186.912-12.183 3.405-24.409 8.04z',
  score: SCORES.EPIC,
  obtainedCheck: ({ match }) => match.participant.stats.pirateScore >= 3,
  context: 'matches',
  attribute: 'cunning'
};

export default thePirate;
