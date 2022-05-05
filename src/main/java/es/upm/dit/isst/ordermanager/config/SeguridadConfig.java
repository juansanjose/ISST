package es.upm.dit.isst.ordermanager.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SeguridadConfig extends WebSecurityConfigurerAdapter{
   
    @Override
    protected void configure(HttpSecurity http) throws Exception{

        http.authorizeRequests()
            .antMatchers("/areagestor").hasAnyRole("GESTOR")
            .antMatchers("/areacliente").hasAnyRole("CLIENTE")
            .antMatchers("/arearepartidor").hasAnyRole("REPAR")
        .and()
            .formLogin()
            //.loginPage("/login")
            .permitAll()
        .and()
            .logout()
            .logoutSuccessUrl("/")
            .permitAll();
    }

    @Autowired
    DataSource ds;
/* 
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.jdbcAuthentication().dataSource(ds)
            .usersByUsernameQuery("select nombreusuario, password, enabled from usuarios where nombreusuario=?")
            .authoritiesByUsernameQuery("select nombreusuario,rolusuario from roles where nombreusuario=?");
    } */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.inMemoryAuthentication()
            .withUser("gestor").password(passwordEncoder().encode("gestor1")).roles("GESTOR").and()
            .withUser("cliente").password(passwordEncoder().encode("cliente1")).roles("CLIENTE").and()
            .withUser("repar").password(passwordEncoder().encode("repar1")).roles("REPAR");
    }

    @Override
    public void configure(WebSecurity web) throws Exception{
        web
            .ignoring()
            .antMatchers("/h2/**","/api/**");
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

}
