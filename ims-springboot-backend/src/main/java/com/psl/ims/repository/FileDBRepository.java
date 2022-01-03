package com.psl.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.psl.ims.entity.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String>{

}
