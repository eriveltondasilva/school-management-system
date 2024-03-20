<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;

class SearchServices
{
    public function searchPerson(Model $model, string $searchTerm, array $columns)
    {
        $query = $model::select($columns)
            ->where('id', $searchTerm)
            ->orWhere('name', 'like', "%{$searchTerm}%");

        $query->latest('id');

        return $query->paginate(20);
    }
}
