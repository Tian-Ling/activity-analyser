export const parseFile = (
  file: File,
  loadCallback: (fileResult: ArrayBuffer) => void
): void => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = (result): void => {
    loadCallback(result.target.result as ArrayBuffer);
  };
};
