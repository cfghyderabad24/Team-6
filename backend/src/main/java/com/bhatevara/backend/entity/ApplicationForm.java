package com.bhatevara.backend.entity;

import jakarta.persistence.*;
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

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] twelveth_cert;

    private double twelveth_score;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] fee_structure;

    private Long pngo_id;

    private boolean pngo_status=false;
    private String pngo_remark="";

    private boolean volunteer_status=false;

    private String volunteer_remark="";

    private boolean board_status=false;
    private String board_remark="";


}
