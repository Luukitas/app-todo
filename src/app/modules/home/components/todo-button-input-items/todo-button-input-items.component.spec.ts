import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonInputItemsComponent } from './todo-button-input-items.component';

describe('TodoButtonInputItemsComponent', () => {
  let component: TodoButtonInputItemsComponent;
  let fixture: ComponentFixture<TodoButtonInputItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonInputItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtonInputItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
