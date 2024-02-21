import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../../components/tableComponents/table/table.component';
import { TableControlsComponent } from '../../../components/tableComponents/table-controls/table-controls.component';
import { FilterTextComponent } from '../../../components/filtersComponents/filter-text/filter-text.component';
import { FilterDropdownComponent } from '../../../components/filtersComponents/filter-dropdown/filter-dropdown.component';
import { FilterRangeComponent } from '../../../components/filtersComponents/filter-range/filter-range.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    TableControlsComponent,
    FilterTextComponent,
    FilterDropdownComponent,
    FilterRangeComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
    {
      _id: '65ccf9f26954ea9d112eafb1',
      name: 'Example Produc',
      images: [
        {
          name: 'main',
          url: 'https://i.ibb.co/YBYnkC8/baf556d36c75.jpg',
          _id: '65ccf9f26954ea9d112eafb2',
        },
        {
          name: 'img1',
          url: 'https://i.ibb.co/vP6vG8s/6b2093806438.jpg',
          _id: '65ccf9f26954ea9d112eafb3',
        },
      ],
      description: 'This is an example product description.',
      modelNumber: '123sA',
      manufacturer: 'Example Manufacturer',
      countryOfOrigin: 'Example Country',
      brandName: 'Example Brand',
      colors: [
        {
          colorName: 'Red',
          quantity: 10,
          _id: '65ccf9f26954ea9d112eafb4',
        },
        {
          colorName: 'Blue',
          quantity: 5,
          _id: '65ccf9f26954ea9d112eafb5',
        },
      ],
      price: 59.99,
      discountPercentage: 10,
      ratings: {
        count: 0,
        average: 0,
      },
      reviews: [],
      category: 'Phones',
      keywords: ['example', 'product'],
      frozen: false,
      tickets: [],
      createdAt: '2024-02-14T17:35:46.110Z',
      updatedAt: '2024-02-14T17:35:46.110Z',
      __v: 0,
    },
  ];

  selectedItems: string[] = [];
  tableCols = [
    { lable: 'Name', colData: 'name' },
    { lable: 'Category', colData: 'category' },
    { lable: 'Brand', colData: 'brandName' },
    { lable: 'Price', colData: 'price' },
    { lable: 'Stock', colData: 'stock' },
    { lable: 'Status', colData: 'isFrozen' },
  ];

  ngOnInit() {
    this.products.map((p: any) => {
      p.selected = false;
      p.stock = 20;
      p.isFrozen = p.frozen ? 'Frozen' : 'Active';
    });
  }

  getSelected(data: any) {
    this.selectedItems = data;
  }
}
