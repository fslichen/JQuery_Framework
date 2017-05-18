package evolution.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController// With @RestController, the response dto is converted to json automatically.
public class AnyController {
	@PostMapping("/post")
	public List<AnyDto> post(@RequestBody AnyDto anyDto) {
		return Arrays.asList(anyDto, anyDto);
	}
}
