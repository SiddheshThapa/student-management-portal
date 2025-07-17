package com.student.portal.controller;

import com.student.portal.model.CustomOAuth2User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/api/user")
    public String user(@AuthenticationPrincipal CustomOAuth2User user) {
        if (user == null) {
            return "No user logged in.";
        }
        return "Logged in user: " + user.getName() + ", Email: " + user.getEmail();
    }
}
