import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller({ path: 'customer', version: '1' })
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  profile() {
    return true;
  }
}
