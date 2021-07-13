import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch {
    console.error(error);
  }
  // Your code here with await
})();
