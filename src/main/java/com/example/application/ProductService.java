package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;
import org.springframework.stereotype.Service;

@BrowserCallable
@Service
@AnonymousAllowed
public class ProductService extends CrudRepositoryService<Product, Long> {
    public ProductService(ProductRepository productRepository) {
        super(Product.class, productRepository);
    }
}
