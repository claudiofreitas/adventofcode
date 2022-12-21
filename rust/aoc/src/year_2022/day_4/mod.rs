#[allow(dead_code)]
pub fn solve_part_1(input: &str) -> u32 {
    input
        .lines()
        .map(|line| line.split_once(",").unwrap())
        .filter_map(|(elf1, elf2)| {
            let (lower1, upper1) = elf1.split_once("-").unwrap();
            let (lower1, upper1) = (
                lower1.parse::<u32>().unwrap(),
                upper1.parse::<u32>().unwrap(),
            );

            let (lower2, upper2) = elf2.split_once("-").unwrap();
            let (lower2, upper2) = (
                lower2.parse::<u32>().unwrap(),
                upper2.parse::<u32>().unwrap(),
            );

            let elf1_contains_elf2 = lower2 <= lower1 && upper1 <= upper2;
            let elf2_contains_elf1 = lower1 <= lower2 && upper2 <= upper1;
            if elf1_contains_elf2 || elf2_contains_elf1 {
                return Some(1);
            } else {
                return None;
            }
        })
        .sum::<u32>()
}

#[allow(dead_code)]
pub fn solve_part_2(input: &str) -> u32 {
    input
        .lines()
        .map(|line| line.split_once(",").unwrap())
        .filter_map(|(elf1, elf2)| {
            let (lower1, upper1) = elf1.split_once("-").unwrap();
            let (lower1, upper1) = (
                lower1.parse::<u32>().unwrap(),
                upper1.parse::<u32>().unwrap(),
            );

            let (lower2, upper2) = elf2.split_once("-").unwrap();
            let (lower2, upper2) = (
                lower2.parse::<u32>().unwrap(),
                upper2.parse::<u32>().unwrap(),
            );

            let elf1_intersects_elf2_on_lower = lower2 <= lower1 && lower1 <= upper2;
            let elf1_intersects_elf2_on_upper = lower2 <= upper1 && upper1 <= upper2;
            let elf1_contains_elf2 = lower2 <= lower1 && upper1 <= upper2;
            let elf2_contains_elf1 = lower1 <= lower2 && upper2 <= upper1;
            if elf1_intersects_elf2_on_upper
                || elf1_intersects_elf2_on_lower
                || elf1_contains_elf2
                || elf2_contains_elf1
            {
                return Some(1);
            } else {
                return None;
            }
        })
        .sum::<u32>()
}

#[cfg(test)]
mod test {
    use std::fs;

    use super::solve_part_1;
    #[allow(unused_imports)]
    use super::solve_part_2;

    #[test]
    fn it_solves_part_1_sample() {
        let file_path = "./src/year_2022/day_4/sample.txt";
        let file_content: String =
            fs::read_to_string(file_path).expect("It was not possible to open the file");
        let result = solve_part_1(&file_content);
        assert_eq!(result, 2);
    }

    #[test]
    fn it_solves_part_1_real() {
        let file_path = "./src/year_2022/day_4/input.txt";
        let file_content: String =
            fs::read_to_string(file_path).expect("It was not possible to open the file");
        let result = solve_part_1(&file_content);
        assert_eq!(result, 518);
    }

    #[test]
    fn it_solves_part_2_sample() {
        let file_path = "./src/year_2022/day_4/sample.txt";
        let file_content: String =
            fs::read_to_string(file_path).expect("It was not possible to open the file");
        let result = solve_part_2(&file_content);
        assert_eq!(result, 4);
    }

    #[test]
    fn it_solves_part_2_real() {
        let file_path = "./src/year_2022/day_4/input.txt";
        let file_content: String =
            fs::read_to_string(file_path).expect("It was not possible to open the file");
        let result = solve_part_2(&file_content);
        assert_eq!(result, 909);
    }
}
