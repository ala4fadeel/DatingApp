import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryAnimation, NgxGalleryImage } from '@kolkov/ngx-gallery';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.route.data.subscribe(data => {
      this.user = data['user'];
    })*/
    this.loadUser();
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
  
      }
    ];

    //ERROR TypeError: Cannot read property 'photos' of undefined =>  for(const photo of this.user.photos)
    //To fix this error we move this line below to loadUser method.
    //this.galleryImages = this.getImages();
  }

  

   // tslint:disable-next-line: align
   loadUser()
{
    //the plus + convert the 'id' to a number. The line below works with/without the plus +
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user:User) => {
      //this.userService.getUser(+this.route.snapshot.paramMap.get['username']).subscribe((user:User) => {

      this.user = user;
      this.galleryImages = this.getImages();

    }, error =>{
      this.alertify.error(error);
    });

  }
  
  // tslint:disable-next-line: align
  

getImages():NgxGalleryImage[]{
  const imageUrls = [];
  for(const photo of this.user.photos)
{
  imageUrls.push({
    small: photo?.url,
    medium: photo?.url,
    big:photo?.url
  });
}

return imageUrls;

}


}
