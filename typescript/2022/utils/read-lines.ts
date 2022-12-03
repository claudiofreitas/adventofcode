import fs from 'fs';
import readline from 'readline';

const readLines = async (filepath: string): Promise<string[]> => {
  const fileStream = fs.createReadStream(filepath);
  const readLineInterface = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const lines: string[] = [];
  for await (const line of readLineInterface) {
    lines.push(line);
  }
  return lines;
};

export { readLines };
