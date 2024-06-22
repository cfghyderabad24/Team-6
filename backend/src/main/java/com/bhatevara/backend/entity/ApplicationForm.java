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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String formNumber;
    private String studentName;
    private String courseName;
    private int courseDuration;
    private int currentYear;
    private String instituteName;
    private String affiliatedUniversity;
    private double currentYearFee;
    private String fatherName;
    private String motherName;
    private String postalAddress;
    private String city;
    private String pin;
    private String state;
    private String whatsappNumber;
    private String alternateMobile;
    private String email;
    private String bankAccountNumber;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] panCard;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] incomeProof;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] tenthCertificate;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] twelfthCertificate;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] bankStatements;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] currentYearFeeReceipt;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] feeStructure;

    private boolean pngoStatus;
    private String pngoRemark;
    private boolean volunteerStatus;
    private String volunteerRemark;
    private boolean boardStatus;
    private String boardRemark;
}
