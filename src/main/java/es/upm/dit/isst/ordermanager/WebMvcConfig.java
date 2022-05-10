package es.upm.dit.isst.ordermanager;

import java.io.IOException;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;
@CrossOrigin
@Configuration

@EnableAspectJAutoProxy(proxyTargetClass = true)


// @EnableGlobalMethodSecurity(prePostEnabled = true)

public class WebMvcConfig  implements WebMvcConfigurer{
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
      registry.addResourceHandler("/**")
          .addResourceLocations("classpath:/static/")
          .resourceChain(true)
          .addResolver(new PathResourceResolver() {
            @Override
            protected Resource getResource(String resourcePath,
                                           Resource location) throws IOException {
              Resource requestedResource = location.createRelative(resourcePath);
              return requestedResource.exists() && requestedResource.isReadable()
                  ? requestedResource
                  : new ClassPathResource("/static/index.html");
            }
          });
    }
  }

