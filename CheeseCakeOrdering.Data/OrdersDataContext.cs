using Microsoft.EntityFrameworkCore;
using System;

namespace CheeseCakeOrdering.Data;

public class OrdersDataContext : DbContext
{
    private readonly string _connectionString;

    public OrdersDataContext(string connectionString)
    {
        _connectionString = connectionString;
    }

    public DbSet<Orders> Orders { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(_connectionString);
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
        {
            relationship.DeleteBehavior = DeleteBehavior.Restrict;
        }
    }
}