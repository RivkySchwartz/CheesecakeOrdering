using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CheeseCakeOrdering.Data.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Flavor",
                table: "Orders",
                newName: "BaseFlavor");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BaseFlavor",
                table: "Orders",
                newName: "Flavor");
        }
    }
}
