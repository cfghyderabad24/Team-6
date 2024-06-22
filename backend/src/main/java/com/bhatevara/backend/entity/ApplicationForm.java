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
    private byte[] tenth_cert;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] twelveth_cert;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] fee_structure;

    private Long pngo_id;

    private boolean pngo_status;
    private String pngo_remark;

    private boolean volunteer_status;

    private String volunteer_remark;

    private boolean board_status;
    private String board_remark;


}
