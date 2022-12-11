#![allow(dead_code)]

use std::fs;

pub fn read_file_lines(file_path: &str) -> Vec<String> {
    let mut lines: Vec<String> = Vec::new();

    let contents: String =
        fs::read_to_string(file_path).expect("Should have been able to read the file");

    for line in contents.lines() {
        lines.push(line.to_string());
    }

    return lines;
}
