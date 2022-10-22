import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'app_events' })
export class AppEvent {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('nvarchar', { name: 'name', length: 50 })
  name: string;

  @Column('text', { name: 'content' })
  content: string;

  @Column('datetime', { name: 'occurence_date' })
  occurrenceDate: string;
}
