import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Category } from '../../categories/entities/category.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'products' })
@ObjectType()
export class Product {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  product_id: number;

  /* @Column({ type: 'uuid', unique: true })
  @Field(() => String)
  uuid: string; */


  @Column({ type: 'varchar', length: 50 })
  @Field(() => String)
  name: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @Field(() => String, { nullable: true })
  code: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @Field(() => String, { nullable: true })
  stock: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @Field(() => String, { nullable: true })
  image: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @Field(() => String, { nullable: true })
  status: string;


  @Field(() => Category, { nullable: true })
  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn({ name: 'category' })
  category: Category;

  // @Field(() => DetailsSale)
  // @OneToMany(() => DetailsSale, (detailsSale) => detailsSale.product)
  // detailsSale: DetailsSale[];


  @Field(() => Date)
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
  })
  deletedAt?: Date;

}
