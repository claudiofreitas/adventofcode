#![allow(dead_code)]

#[derive(Debug)]
enum Shape {
    Rock,
    Paper,
    Scissors,
}

impl Shape {
    fn from(string_shape: &str) -> Shape {
        match string_shape {
            "A" | "X" => Shape::Rock,
            "B" | "Y" => Shape::Paper,
            "C" | "Z" => Shape::Scissors,
            _ => panic!("Impossible to converto into Shape. Unexpected shape: {string_shape}"),
        }
    }

    fn score(&self) -> u32 {
        match self {
            Shape::Rock => 1,
            Shape::Paper => 2,
            Shape::Scissors => 3,
        }
    }
}

pub fn solve_part_1(lines: &Vec<String>) -> u32 {
    return lines
        .iter()
        .map(|line| {
            let collected_tuple = line
                .split(" ")
                .map(|string_shape| Shape::from(string_shape))
                .collect::<Vec<Shape>>();

            let opponent_shape = &collected_tuple[0];
            let my_shape = &collected_tuple[1];

            let outcome_score = match (opponent_shape, my_shape) {
                (Shape::Scissors, Shape::Rock) => 6,
                (Shape::Paper, Shape::Scissors) => 6,
                (Shape::Rock, Shape::Paper) => 6,

                (Shape::Rock, Shape::Rock) => 3,
                (Shape::Paper, Shape::Paper) => 3,
                (Shape::Scissors, Shape::Scissors) => 3,

                _ => 0,
            };

            outcome_score + my_shape.score()
        })
        .sum();
}

#[cfg(test)]
mod test {
    use super::solve_part_1;
    use crate::utils::read_file_lines;

    #[test]
    fn it_solves_part_1_sample() {
        let file_path = "./src/year_2022/day_2/sample.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_1(&lines);
        assert_eq!(result, 15);
    }

    #[test]
    fn it_solves_part_1_real() {
        let file_path = "./src/year_2022/day_2/input.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_1(&lines);
        assert_eq!(result, 11_666);
    }
}
