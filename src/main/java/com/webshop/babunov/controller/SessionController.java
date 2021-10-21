package com.webshop.babunov.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

@RestController
@RequestMapping("/api/sessions")
@CrossOrigin("*")
public class SessionController {
    @PostMapping(value = "/invalidate/session")
    public String destroySession(HttpServletRequest request) {
        request.getSession().invalidate();
        return "redirect:/home";
    }

    @GetMapping(value = "/verifyAuth")
    public VerifyResponse verifyAuth(HttpServletRequest request) {
        var result = new VerifyResponse();
        var status = (Boolean) request.getSession().getAttribute("Admin-LoggedIn");
        result.setStatus(status != null && status);
        return result;
    }

    public static class VerifyResponse {

        public VerifyResponse() {

        }

        private Boolean status;

        public Boolean getStatus() {
            return this.status;
        }

        public void setStatus(Boolean status) {
            this.status = status;
        }
    }
}
