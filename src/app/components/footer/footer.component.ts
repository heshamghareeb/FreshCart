import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, ClipboardModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private toastr: ToastrService, public translate: TranslateService) {}

  showSuccess() {
    this.translate.get('Copy successfully').subscribe((data:any)=> {
      this.toastr.success(data);
    });

  }
}
