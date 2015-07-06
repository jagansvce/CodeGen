package prj.codegen.app;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @RequestMapping(value="/rest", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public List<String> rest() {
    	List<String> strs = new ArrayList<String>(0);
    	strs.add("1111");
    	strs.add("2222");
    	strs.add("3333");
    	strs.add("4444");
        return strs;
    }

}