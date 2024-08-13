import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '@ecommerce/layout';

const mockTitle = 'Mock Title';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = mockTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLElement = fixture.nativeElement.querySelector('header');
    expect(header.textContent).toContain(mockTitle);

    component.title = 'Another title';
    fixture.detectChanges();
    expect(header.textContent).toContain('Another title');
  });
});
