package com.webshop.babunov.controller;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/sessions")
@CrossOrigin("*")
public class SessionController {
    @PostMapping(value = "/invalidate/session")
    public boolean destroySession(HttpServletRequest request) {
        request.getSession().invalidate();
        return true;
    }

    @GetMapping(value = "/verifyAuth")
    public VerifyResponse verifyAuth(HttpServletRequest request) {
        var result = new VerifyResponse();
        var status = (Boolean) request.getSession().getAttribute("Admin-LoggedIn");
        result.setStatus(status != null && status);
        return result;
    }

    public static class VerifyResponse {

        private Boolean status;

        public VerifyResponse() {

        }

        public Boolean getStatus() {
            return this.status;
        }

        public void setStatus(Boolean status) {
            this.status = status;
        }
    }
}
