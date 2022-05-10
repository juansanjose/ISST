package es.upm.dit.isst.ordermanager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import es.upm.dit.isst.ordermanager.jwt.AuthEntryPointJwt;
import es.upm.dit.isst.ordermanager.jwt.AuthTokenFilter;
import es.upm.dit.isst.ordermanager.services.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableAspectJAutoProxy(proxyTargetClass = true)



  @EnableGlobalMethodSecurity(
      // securedEnabled = true,
      // jsr250Enabled = true,
      prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Autowired
  UserDetailsServiceImpl userDetailsService;

  @Autowired
  private AuthEntryPointJwt unauthorizedHandler;

  @Bean
  public AuthTokenFilter authenticationJwtTokenFilter() {
    return new AuthTokenFilter();
  }

  @Override
  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
    authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
  }

  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
  @Override
public void configure(WebSecurity web) throws Exception {
    web
        .ignoring()
            .antMatchers( "/css/**", "/js/**", "/img/**", "/bootstrap/**","/favicon.ico","/static/**","/manifest.json","/logo**");
}

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable()

    .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
    
    .authorizeRequests()
      .antMatchers("/","/home","/register","/api/auth/**","/login","/api/**").permitAll()
      .antMatchers("/areagestor").hasRole("ADMIN")
      .antMatchers("/perfilparticular","/seguimientocliente/**","/areacliente/**","/rutarepartidor/**","/profile/**","/arearepartidor","/arearepartidorconfirmar","/arearepartidorfinalizar","/perfilrepartidor","/rutarepartidor/**","/pedidos/**").hasAnyRole("ADMIN","USER","REPARTIDOR")
      
     .anyRequest().authenticated();
     
     
     

      http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

		
    

}
}

