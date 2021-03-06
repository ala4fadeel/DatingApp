using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        public string Username {get;set;}

       [Required]

       [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4 & 8")]
        public string Password {get;set;}
    }
}