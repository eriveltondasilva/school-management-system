<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class SearchServices
{
    public function searchPerson(Model $model, ?string $searchTerm, array $columns)
    {
        $query = $model::select($columns)
        ->when($searchTerm, function (Builder $query) use ($searchTerm) {
            $query->where('id', $searchTerm)->orWhere('name', 'like', "%{$searchTerm}%");
        })
        ->orderBy('name');

        return $query;
    }
}
