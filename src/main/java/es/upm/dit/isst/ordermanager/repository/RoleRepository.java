package es.upm.dit.isst.ordermanager.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.ordermanager.model.ERole;
import es.upm.dit.isst.ordermanager.model.Role;

@Repository

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);

    
}
