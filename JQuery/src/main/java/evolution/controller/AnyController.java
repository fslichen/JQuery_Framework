package evolution.controller;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController// With @RestController, the response dto is converted to json automatically.
public class AnyController {
	@PostMapping("/post")
	public List<AnyDto> post(@RequestBody AnyDto anyDto) {
		List<String> names = Arrays.asList("Chen", "Ling", "Elsa", "Anna", "Ben");
		List<String> genders = Arrays.asList("M", "F", "F", "F", "M");
		List<Integer> ages = Arrays.asList(27, 26, 25, 24, 23);
		List<AnyDto> anyDtos = new LinkedList<>();
		for (int i = 0; i < 5; i++) {
			anyDtos.add(new AnyDto(i, names.get(i), genders.get(i), ages.get(i)));
		}
		return anyDtos;
	}
}
