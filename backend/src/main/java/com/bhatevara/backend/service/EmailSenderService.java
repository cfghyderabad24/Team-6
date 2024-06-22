package com.bhatevara.backend.service;

public interface EmailSenderService {
    void sendEmail(String to, String subject, String content);
}
