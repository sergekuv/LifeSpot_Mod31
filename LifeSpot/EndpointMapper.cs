using System.IO;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace LifeSpot
{
    public static class EndpointMapper
    {
        /// <summary>
        /// CSS Mapping
        /// </summary>
        /// <param name="builder"></param>
        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            string[] cssFiles = { "index.css" };
            foreach (string fileName in cssFiles)
            {
                builder.MapGet($"/Static/CSS/{fileName}", async context =>
                {
                    string cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "CSS", fileName);
                    string css = await File.ReadAllTextAsync(cssPath);
                    await context.Response.WriteAsync(css);
                });
            }
        }

        public static void MapJs(this IEndpointRouteBuilder builder)
        {
            string[] jsFiles = {"index.js", "testing.js", "about.js" };

            foreach (string fileName in jsFiles)
            {
                builder.MapGet($"/Static/JS/{fileName}", async context =>
                {
                    string jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", fileName);
                    string js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });
            }
        }

        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            string footerHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "footer.html"));
            string sideBarHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "sidebar.html"));

            builder.MapGet("/", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");
                var viewText = await File.ReadAllTextAsync(viewPath);

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("/testing", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("/about", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "about.html");

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });
        }

        //public static void MapImg(this IEndpointRouteBuilder builder)
        //{
        //    string[] imgFiles = { "1.jpg", "2.jpg", "3.jpg" };

        //    foreach (string fileName in imgFiles)
        //    {
        //        builder.MapGet($"/Static/Images/{fileName}", async context =>
        //        {
        //            string imgPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "Images", fileName);
        //            string img = await File.ReadAllTextAsync(imgPath);
        //            await context.Response.WriteAsync(img);
        //        });
        //    }
        //}


    }
}
