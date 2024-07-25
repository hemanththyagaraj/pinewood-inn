/**
 * @param {number} Size in Bytes
 * @returns {string} Size in MegaBytes
 */
export const formatFileSize = (size: number) => {
  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};
