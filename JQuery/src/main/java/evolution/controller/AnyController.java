package evolution.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController// With @RestController, the response dto is converted to json automatically.
public class AnyController {
	@PostMapping("/post")
	public AnyDto post(@RequestBody AnyDto anyDto) {
		System.out.println(anyDto);
		return anyDto;
	}
}
