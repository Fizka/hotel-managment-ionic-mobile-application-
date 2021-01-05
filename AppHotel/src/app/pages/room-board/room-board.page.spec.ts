import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomBoardPage } from './room-board.page';

describe('RoomBoardPage', () => {
  let component: RoomBoardPage;
  let fixture: ComponentFixture<RoomBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBoardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
