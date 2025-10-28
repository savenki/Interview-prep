import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  uploadForm: FormGroup;
  successMessage = '';

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
    this.uploadForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  async onSubmit() {
  if (this.uploadForm.valid) {
    const { title, content } = this.uploadForm.value;
    await this.firestore.collection('markdownFiles').add({
      title,
      content,
      createdAt: new Date()
    });
    this.successMessage = 'Markdown file uploaded successfully!';
    this.uploadForm.reset();
  }
}
}