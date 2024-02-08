import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryLanguagesComponent } from './repository-languages.component';

describe('RepositoryLanguagesComponent', () => {
  let component: RepositoryLanguagesComponent;
  let fixture: ComponentFixture<RepositoryLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
