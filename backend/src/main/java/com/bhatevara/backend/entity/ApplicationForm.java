package com.bhatevara.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationForm {

    @Id
    private String adhar_id;

    private String first_name;
    private String last_name;
    private String email;
    private String phone;

    private Long pngo_id;

    private boolean pngo_status;
    private String pngo_remark;

    private boolean volunteer_status;

    private String volunteer_remark;

    private boolean board_status;
    private String board_remark;


}
