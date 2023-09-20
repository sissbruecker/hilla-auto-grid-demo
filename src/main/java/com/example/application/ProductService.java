package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.Nonnull;
import dev.hilla.Nullable;
import dev.hilla.crud.CrudRepositoryService;
import dev.hilla.crud.filter.Filter;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@BrowserCallable
@Service
@AnonymousAllowed
public class ProductService extends CrudRepositoryService<Product, Long> {
    public ProductService(ProductRepository productRepository) {
        super(Product.class, productRepository);
    }

    // Workaround for exposing superclass-method
    @Override
    public @Nonnull List<@Nonnull Product> list(Pageable pageable, @Nullable Filter filter) {
        return super.list(pageable, filter);
    }
}
