const openFullscreen = (): void => {
  document.documentElement.requestFullscreen();
};

const closeFullscreen = (): void => {
  document.exitFullscreen();
};

export const toggleFullScreen = (fullScreen: boolean): void => {
  fullScreen ? closeFullscreen() : openFullscreen();
};
