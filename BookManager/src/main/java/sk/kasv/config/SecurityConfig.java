package sk.kasv.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() 
            .authorizeRequests()
                .requestMatchers("/api/public/**").permitAll() // Allow public access to specific endpoints
                .anyRequest().authenticated() // Require authentication for all other endpoints
                .and()
            .httpBasic(); // Use basic authentication for simplicity

        return http.build();
    }
}