use std::collections::HashSet;

fn get_priority(c: &char) -> u32 {
    match c.is_lowercase() {
        true => u32::from(*c) - u32::from('a') + 1,
        false => u32::from(*c) - u32::from('A') + 27,
    }
}

#[allow(dead_code)]
pub fn solve_part_1(lines: &Vec<String>) -> u32 {
    return lines
        .iter()
        .map(|rucksack: &String| rucksack.split_at(rucksack.len() / 2))
        .map(|(partition1, partition2): (&str, &str)| {
            let mut repeating_item: Option<char> = None;
            for char2 in partition2.chars() {
                if partition1.contains(char2) {
                    repeating_item = Some(char2);
                    break;
                }
            }
            get_priority(&repeating_item.unwrap())
        })
        .sum();
}

#[allow(dead_code)]
pub fn solve_part_2(_lines: &Vec<String>) -> u32 {
    let s = _lines
        .chunks(3)
        .map(|three_rucksacks| {
            let a = [
                three_rucksacks[0].chars().collect::<HashSet<char>>(),
                three_rucksacks[1].chars().collect::<HashSet<char>>(),
                three_rucksacks[2].chars().collect::<HashSet<char>>(),
            ];
            // dbg!(print_type_of(&a));
            a

            // three_rucksacks
            //     .iter()
            //     .map(|rucksack| rucksack.chars().collect::<HashSet<char>>())
            //     .collect::<Vec<HashSet<char>>>()
        })
        .map(|[set0, set1, set2]| &(&set0 & &set1) & &set2)
        .map(|intersection| {
            if intersection.len() != 1 {
                panic!(
                    "Final set is not a single element. Set = {:?}",
                    intersection
                );
            }
            match intersection.iter().next() {
                Some(c) => get_priority(&c),
                None => panic!("It was supposed to not be empty"),
            }
        })
        .sum::<u32>();
    s
}

#[cfg(test)]
mod test {
    use crate::utils::read_file_lines;

    use super::solve_part_1;
    use super::solve_part_2;

    #[test]
    fn it_solves_part_1_sample() {
        let file_path = "./src/year_2022/day_3/sample.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_1(&lines);
        assert_eq!(result, 157);
    }

    #[test]
    fn it_solves_part_1_real() {
        let file_path = "./src/year_2022/day_3/input.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_1(&lines);
        assert_eq!(result, 7597);
    }

    #[test]
    fn it_solves_part_2_sample() {
        let file_path = "./src/year_2022/day_3/sample.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_2(&lines);
        assert_eq!(result, 70);
    }

    #[test]
    fn it_solves_part_2_real() {
        let file_path = "./src/year_2022/day_3/input.txt";
        let lines = read_file_lines(file_path);
        let result = solve_part_2(&lines);
        assert_eq!(result, 2607);
    }
}
